
# JobRecommendation


### 概述

职位推荐


### 示例

#### 示例代码

- 职位推荐
- 职位推荐
- _JobRecommendation(@components/JobRecommendation),antd(antd),_EmailRender(@react-email/render),monacoEditor(@monaco-editor/react),_useDebounce(use-debounce),_monacoLoader(@monaco-editor/loader)

```jsx
const { default: JobRecommendation } = _JobRecommendation;
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
    name: '张三', companyName: 'XX公司', positionList: [{
      name: '多模态大模型算法工程师',
      salary: '30-60K·16薪',
      link: 'https://www.baidu.com',
      tags: ['某大型上市互联网公司', '上海', '本科', '3-5年']
    }, {
      name: '多模态大模型算法工程师',
      salary: '30-60K·16薪',
      link: 'https://www.baidu.com',
      tags: ['某大型上市互联网公司', '上海', '本科', '3-5年']
    }, {
      name: '多模态大模型算法工程师',
      salary: '30-60K·16薪',
      link: 'https://www.baidu.com',
      tags: ['某大型上市互联网公司', '上海', '本科', '3-5年']
    }]
  });
  const setCode = useDebouncedCallback(code => {
    try {
      setData(JSON.parse(code));
    } catch (e) {
    }
  }, 500);

  return (<Space direction="vertical">
      <JobRecommendation {...data} />
      <div>data:</div>
      <CodeEditor height="400px" defaultLanguage="json" defaultValue={JSON.stringify(data, null, 2)}
                  onChange={setCode} />
      <div>html:</div>
      <div>
        {emailRender(<JobRecommendation {...data} />, {
          pretty: true
        })}
      </div>
      <div>text:</div>
      <div>
        {emailRender(<JobRecommendation {...data} />, {
          plainText: true
        })}
      </div>
    </Space>);
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

