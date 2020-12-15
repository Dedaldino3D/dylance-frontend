import { Container, Header, Content, Tag } from "./styles";

const Job = (props) => {
  return (
    <Container>
      <Header>
        <h1>Software Engineer to build a streaming system with Java and Go</h1>
      </Header>
      <Content>
        We are a business in streaming field, we need a programmer not an agency
        to help us building our streaming API with Java Programming Language
        (also using a bit of Go Programming Language), before send a proposal
        you'll be prompted with some questions about the project and how you can
        build it keeping scalability and performance in mind.
      </Content>
      <Tag>Java</Tag>
      <Tag>Go</Tag>
      <Tag>C++</Tag>
    </Container>
  );
};

export default Job;
