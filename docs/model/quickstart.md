# 本地大模型调用

## Qwen3-4b模型调用

### 下载模型

<LinkCard url="https://www.modelscope.cn/models/Qwen/Qwen3-4B" title="modelscope 模型下载地址" description="https://www.modelscope.cn/models/Qwen/Qwen3-4B"/>


### 运行案例

#### modelscope
::: details 点我查看`modelscope`运行案例
```python
from modelscope import AutoModelForCausalLM, AutoTokenizer

model_name = "Qwen/Qwen3-4B"

# load the tokenizer and the model
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)

# prepare the model input
prompt = "Give me a short introduction to large language model."
messages = [
    {"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True # Switches between thinking and non-thinking modes. Default is True.
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

# conduct text completion
generated_ids = model.generate(
    **model_inputs,
    max_new_tokens=32768
)
output_ids = generated_ids[0][len(model_inputs.input_ids[0]):].tolist() 

# parsing thinking content
try:
    # rindex finding 151668 (</think>)
    index = len(output_ids) - output_ids[::-1].index(151668)
except ValueError:
    index = 0

thinking_content = tokenizer.decode(output_ids[:index], skip_special_tokens=True).strip("\n")
content = tokenizer.decode(output_ids[index:], skip_special_tokens=True).strip("\n")

print("thinking content:", thinking_content)
print("content:", content)
```
:::

> [!INFO]
> `modelscope` 提供的案例会下载模型至用户目录下

#### 非 `modelscope` 案例
::: details 点我查看代码
```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

def chat():
    # 本地模型路径
    model_dir = ""

    tokenizer = AutoTokenizer.from_pretrained(model_dir, use_fast=False)

    model = AutoModelForCausalLM.from_pretrained(
        model_dir,
        torch_dtype=torch.float16,
        device_map="auto"
    )
    model.eval()

    prompt = "你是谁？请用一句话介绍你自己。"
    messages = [
        {"role": "user", "content": prompt}
    ]

    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=True,
        enable_thinking=False  # 可选，是否生成“思考过程”
    )

    inputs = tokenizer(text, return_tensors="pt").to(model.device)

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=256,
            do_sample=True,
            temperature=0.7,
            top_p=0.9
        )

    response = tokenizer.decode(outputs[0][inputs.input_ids.shape[1]:], skip_special_tokens=True)
    print("回答：", response)

if __name__ == '__main__':
    chat()
```
:::