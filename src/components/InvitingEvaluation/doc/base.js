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
