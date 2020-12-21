import { Link } from "react-router-dom";
import { string } from "prop-types";

import ButtonSave from "../ButtonSave";
import {
  Container,
  Header,
  Content,
  Tag,
  TagContainer,
  PropTime,
  Info,
} from "./styles";

export const Tags = ({ tags, style }) => (
  <TagContainer>
    {tags.map((t, i) => (
      <Tag style={style} key={i}>
        {t}
      </Tag>
    ))}
  </TagContainer>
);

const Job = ({
  title,
  description,
  tags,
  proposals,
  payment_type,
  est_time,
  created_at,
}) => {
  return (
    <Container>
      <Header>
        <Link to={`/jobs/${title}`}>
          <h1>{title}</h1>
        </Link>
        <ButtonSave />
      </Header>
      <Content>
        <Info>
          <span>{payment_type}</span>
          <span>{est_time}</span>
        </Info>
        <p>{description}</p>
      </Content>
      <Tags tags={tags} />
      <PropTime>
        <span>
          Proposals: <span className="proposals">{proposals}</span>
        </span>
        <span>Posted {created_at}</span>
      </PropTime>
    </Container>
  );
};

Job.propTypes = {
  title: string,
  description: string,
  proposals: string,
  payment_type: string,
  est_time: string,
  created_at: string,
};

Job.defaultProps = {
  title: "Software Engineer to build a streaming system with Java and Go",
  description:
    "We are a business in streaming field, we need a programmer not an agency to help us building our streaming API with Java Programming Language (also using a bit of Go Programming Language), before send a proposal you'll be prompted with some questions about the project and how you can build it keeping scalability and performance in mind.",
  tags: ["Java", "Python", "Go", "C++"],
  proposals: "Less than 5",
  payment_type: "Hourly - Intermediate",
  est_time: "3 to 9 months, Less than 14 hrs/week",
  created_at: "21 minutes ago",
};

export default Job;
