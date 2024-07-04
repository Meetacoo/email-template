
# InvitingEvaluation


### 概述

AI邀请测评


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _InvitingEvaluation(@components/InvitingEvaluation),antd(antd),_EmailRender(@react-email/render),monacoEditor(@monaco-editor/react),_useDebounce(use-debounce),_monacoLoader(@monaco-editor/loader)

```jsx
const { default: InvitingEvaluation } = _InvitingEvaluation;
const { Space } = antd;
const { render: emailRender } = _EmailRender;
const { default: CodeEditor } = monacoEditor;
const { useState } = React;
const { useDebouncedCallback } = _useDebounce;
const { default: monacoLoader } = _monacoLoader;

monacoLoader.config({
  paths: {
    vs: 'https://uc.fatalent.cn/packages/monaco-editor/0.48.0/min/vs'
  }
});

const BaseExample = () => {
  const [data, setData] = useState({
    name: '张三',
    link: 'https://www.baidu.com',
  });
  const setCode = useDebouncedCallback(code => {
    try {
      setData(JSON.parse(code));
    } catch (e) {}
  }, 500);

  return (
    <Space direction="vertical">
      <InvitingEvaluation {...data} />
      <div>data:</div>
      <CodeEditor height="400px" defaultLanguage="json" defaultValue={JSON.stringify(data, null, 2)} onChange={setCode} />
      <div>html:</div>
      <div>
        {emailRender(<InvitingEvaluation {...data} />, {
          pretty: true
        })}
      </div>
      <div>text:</div>
      <div>
        {emailRender(<InvitingEvaluation {...data} />, {
          plainText: true
        })}
      </div>
    </Space>
  );
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

