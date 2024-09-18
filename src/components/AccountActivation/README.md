
# AccountActivation


### 概述

账号开通邮件模板


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _AccountActivation(@components/AccountActivation),antd(antd),_EmailRender(@react-email/render),monacoEditor(@monaco-editor/react),_useDebounce(use-debounce),_monacoLoader(@monaco-editor/loader)

```jsx
const { AccountActivationCandidate, AccountActivationCoach, default: AccountContainer, renderAccountContainer } = _AccountActivation;
const { Space, Radio } = antd;
const { render: emailRender } = _EmailRender;
const { useState } = React;
const { default: CodeEditor } = monacoEditor;
const { useDebouncedCallback } = _useDebounce;
const { default: monacoLoader } = _monacoLoader;

monacoLoader.config({
  paths: {
    vs: 'https://uc.fatalent.cn/packages/monaco-editor/0.48.0/min/vs'
  }
});

const initData = {
  basic: {},
  coach: {
    name: 'Coach',
    enName: 'Coach En',
    email: 'fa@talent.com',
    link: 'https://baidu.com',
    initPwd: 'coach888',
    loginUrl: `http://crn.test.fatalent.cn/account/login?role=coach`
  },
  candidate: {
    name: 'Candidate',
    email: 'fa@talent.com',
    link: 'https://baidu.com',
    initPwd: 'better888',
    loginUrl: `http://crn.test.fatalent.cn/account/login?role=candidate`
  }
};

const AccountActivation = ({ data, role }) => {
  switch (role) {
    case 'basic':
      const str = renderAccountContainer(
        `<h2 style=\\"text-align:center;\\">ssssss</h2><p style=\\"text-align:center;\\">&nbsp;</p><p>ssssssss</p><ol><li><a href=\\"https://www.baidu.com\\">222</a></li><li>fff</li></ol><p><span style=\\"background-color:hsl(270, 75%, 60%);\\">sss</span></p>`
      );
      return <div dangerouslySetInnerHTML={{ __html: str }} />;
    case 'coach':
      return <AccountActivationCoach {...data} />;
    case 'candidate':
    default:
      return <AccountActivationCandidate {...data} />;
  }
};

const BaseExample = () => {
  const [role, setRole] = useState('candidate');
  const [data, setData] = useState(initData.candidate);

  const setCode = useDebouncedCallback(code => {
    try {
      setData(JSON.parse(code));
    } catch (e) {}
  }, 500);

  const onChangeRole = e => {
    const roleType = e?.target.value;
    setRole(roleType);
    setData(initData[roleType]);
  };

  return (
    <Space direction="vertical" size={24}>
      <Radio.Group onChange={onChangeRole} value={role}>
        <Radio.Button value="basic">基础框架</Radio.Button>
        <Radio.Button value="candidate">候选人</Radio.Button>
        <Radio.Button value="coach">教练</Radio.Button>
      </Radio.Group>
      <AccountActivation data={data} role={role} />
      <div>data:</div>
      <CodeEditor height="400px" defaultLanguage="json" key={role} defaultValue={JSON.stringify(data, null, 2)} onChange={setCode} />
      <div>html:</div>
      <div>
        {emailRender(<AccountActivation data={data} role={role} />, {
          pretty: true
        })}
      </div>
      <div>text:</div>
      <div>
        {emailRender(<AccountActivation data={data} role={role} />, {
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

