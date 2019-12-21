import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import { get as _get } from 'lodash';
import { List, Button, Skeleton } from 'antd';

import * as actions from './../store/actions';
import ShortPost from './../components/ShortPost/';

const LIMIT_POST = 5;
class Blogs extends Component {
  state = {
    initLoading: true,
    loading: false,
    page: 1,
    reachLimit: false,
    posts: [],
    list: []
  }

  componentDidMount() {
    this.getData(this.state.page).then(posts => {
      const page = this.state.page + 1;
      this.setState({
        ...this.state,
        page,
        initLoading: false,
        posts: [...posts],
        list: [...posts]
      })
    })
  }

  getData = (page) => {
    return axios.get(`/api/v1/posts?limit=${LIMIT_POST}&page=${page}`).then(res => _get(res, "data.data.data", []))
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.posts.concat([...new Array(LIMIT_POST)].map(() => ({ loading: true }))),
    });
    this.getData(this.state.page).then(posts => {
      const data = this.state.posts.concat(posts);
      const page = this.state.page + 1;
      this.setState({
          ...this.state,
          page,
          loading: false,
          reachLimit: posts.length === 0,
          posts: [...data],
          list: [...data]
        }
      );
    });
  }

  render() {
    const { initLoading, loading, reachLimit, list } = this.state;
    const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={this.onLoadMore} disabled={reachLimit}>{reachLimit ? `don't have any post` : 'loading more'}</Button>
        <Button onClick={this.props.onCountUp} disabled={reachLimit}>{`${this.props.count} UP`}</Button>
        <Button onClick={this.props.onCountDown} disabled={reachLimit}>{`${this.props.count} DOWN`}</Button>
      </div>
    ) : null;
    return (
      <List
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => {
          const id = _get(item, '_id', '');
          const title = _get(item, 'title', '');
          const author = _get(item, 'author.name', '');
          const createdAt = _get(item, 'createdAt', '');
          const tags = _get(item, 'tags', []);
          const shortContent = _get(item, 'content','').substring(0, 100);
          const comments = _get(item, 'comments', [])
          return (
            <Skeleton avatar title={false} loading={item.loading} active>
              <ShortPost
                key={id}  
                title={title}
                author={author}
                createdAt={createdAt}
                tags={tags}
                shortContent={shortContent}
                comments={comments}
              />
            </Skeleton>
          )
        }}
      />
    )
  }
}


const mapStateToProps = (state = {}) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCountUp: () => dispatch(actions.countUp()),
    onCountDown: () => dispatch(actions.countDown())
  }
}
// export default connect(null, null)(Blogs);

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);