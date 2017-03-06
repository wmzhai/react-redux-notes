import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component, props;

  beforeEach( () => {
    props = { comments: [ 'New Comment', 'Other New Comment' ]};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });
  
  it('shows each comment that is provided', () => {
    expect(component).to.contain(props.comments[0]);
    expect(component).to.contain(props.comments[1]);
  });

});