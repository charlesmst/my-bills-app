import ChangeMonth from './ChangeMonth'
it('should match snapshot',()=>{
    const wrapper = shallow(<ChangeMonth currentDate={new Date(2020,0,1,1,1,1)}/>);
    expect(wrapper).toMatchSnapshot();
})