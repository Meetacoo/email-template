const { default: JobRecommendation } = _JobRecommendation;
const { Space } = antd;
const { render: emailRender } = _EmailRender;
const BaseExample = () => {
  return (
    <Space direction="vertical">
      <JobRecommendation />
      <div>html:</div>
      <div>
        {emailRender(<JobRecommendation />, {
          pretty: true
        })}
      </div>
      <div>text:</div>
      <div>
        {emailRender(<JobRecommendation />, {
          plainText: true
        })}
      </div>
    </Space>
  );
};

render(<BaseExample />);
