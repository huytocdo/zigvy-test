import React from 'react';
import { Typography, Row, Col, Tag, Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import './ShortPost.css';

const { Title } = Typography;

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];

const ShortPost = () => (
  <div class="short-post">
    <Title className="short-post--title">Post title 1</Title>
    <Row className="short-post--infor">
      <Col span={8}>
        <div>Author: John Smith</div>
        <div>Created at: Sep 20, 2018</div>
      </Col>
      <Col span={8} offset={8}>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </Col>
    </Row>
    <Row>
      <Col span={24} className="short-post--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis est eu elit condimentum venenatis at at augue. Donec convallis ultrices neque, maximus consequat nisi sollicitudin eget. Morbi sollicitudin lacus eu ornare molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam aliquam porta risus. Ut mollis blandit velit, ultricies congue tellus eleifend in. Sed facilisis metus et metus lacinia pretium. In elit ipsum, dignissim at mattis eu, tempor quis lectus. Maecenas ultricies nulla sed nisi hendrerit gravida. Vivamus vitae erat accumsan, semper justo vulputate, pulvinar elit. Mauris euismod lectus nibh, eu malesuada orci laoreet et. Morbi tincidunt mi in enim consequat aliquam. Curabitur eget iaculis nisi. Aliquam scelerisque dolor ac urna rutrum convallis. In ac est nisl. Fusce sodales auctor facilisis.\n

        Quisque ultricies sapien urna, vitae sodales ligula condimentum at. Phasellus pellentesque, ipsum at faucibus blandit, tortor ipsum fermentum urna, a convallis sem justo eget orci. Nulla quis scelerisque lacus. Pellentesque tincidunt quis ligula in laoreet. Etiam ut sem vehicula, placerat turpis eget, sollicitudin ligula. Fusce sagittis lobortis sem, quis lobortis tortor ornare a. Ut a augue elementum, vulputate ante et, gravida est. Maecenas nec varius sapien, sit amet aliquet risus. Mauris pellentesque nulla ligula, at pretium sem elementum sit amet. Proin vel risus non magna suscipit convallis. Nunc gravida enim sapien, eu vestibulum arcu facilisis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Col>
    </Row>
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  </div>
);

export default ShortPost;