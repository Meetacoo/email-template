
# JobRecommendation


### 概述

职位推荐


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _JobRecommendation(@components/JobRecommendation),antd(antd),_EmailRender(@react-email/render)

```jsx
const { default: JobRecommendation } = _JobRecommendation;
const { Space } = antd;
const { render: emailRender } = _EmailRender;
const BaseExample = () => {
  return <Space direction="vertical">
    <JobRecommendation />
    <div>html:</div>
    <div>{emailRender(<JobRecommendation />, {
      pretty: true
    })}</div>
    <div>text:</div>
    <div>{emailRender(<JobRecommendation />, {
      plainText: true
    })}</div>
  </Space>;
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

