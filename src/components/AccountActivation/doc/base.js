const {AccountActivationCandidate, AccountActivationCoach} = _AccountActivation;
const {Space, Radio} = antd;
const {render: emailRender} = _EmailRender;
const {useState} = React;
const { default: CodeEditor } = monacoEditor;
const { useDebouncedCallback } = _useDebounce;
const { default: monacoLoader } = _monacoLoader;

monacoLoader.config({
  paths: {
    vs: 'https://uc.fatalent.cn/packages/monaco-editor/0.48.0/min/vs'
  }
});

const initData = {
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
}

const AccountActivation = ({data, role}) => {
  switch (role) {
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

  const onChangeRole = (e) => {
    const roleType = e?.target.value;
    setRole(roleType);
    setData(initData[roleType]);
  };

  return (
    <Space direction='vertical' size={24}>
      <Radio.Group onChange={onChangeRole} value={role}>
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

render(<BaseExample/>);
