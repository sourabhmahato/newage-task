import {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring'
import './App.css';
import bg from './images/hero-banner.jpg'
import banner from './images/hero-bg.jpg'
import colImg1 from './images/col-img-1.jpg';
import colImg2 from './images/col-img-2.jpg';
import Form from './components/Form';
import Table from './components/Table';
import CompletedTable from './components/CompletedTable';
import { inProgressRow, completedRow} from './db';

function App() {
  const [inProgressData, setInProgressData] = useState(null);
  const [completedData, setCompletedData] = useState(null);
  const [formData, setFormData] = useState(null);

  const bgProps = useSpring({ 
    opacity: 1, 
    delay: 500,
    transform: 'translateY(0px)',
    from: { 
      opacity: 0,
      transform: 'translateY(250px)'
    } 
  });
  const bannerProps = useSpring({ 
    opacity: 1, 
    delay: 1500,
    transform: 'translateY(0px)',
    from: { 
      opacity: 0,
      transform: 'translateY(250px)'
    } 
  });
  const colImgProps = useSpring({ 
    opacity: 1, 
    delay: 2500,
    transform: 'translateY(0px)',
    from: { 
      opacity: 0,
      transform: 'translateY(150px)'
    } 
  });
  const colTextProps = useSpring({ 
    opacity: 1, 
    delay: 3000,
    transform: 'translateY(0px)',
    from: { 
      opacity: 0,
    } 
  });
  const ImgTextProps = useSpring({ 
    opacity: 1, 
    delay: 3500,
    from: { 
      opacity: 0,
    } 
  });
  const leftImgProps = useSpring({ 
    opacity: 1, 
    delay: 4000,
    transform: 'translateX(0px)',
    from: { 
      opacity: 0,
      transform: 'translateX(-250px)'
    } 
  });
  const rightImgProps = useSpring({ 
    opacity: 1, 
    delay: 4000,
    transform: 'translateX(0px)',
    from: { 
      opacity: 0,
      transform: 'translateX(250px)'
    } 
  });


  useEffect(() => {
    setInProgressData(inProgressRow);
    setCompletedData(completedRow);
  },[]);

  const progressSubmit = values => {
    var d = new Date();
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    if(values.status === 'Completed'){
      const object = {
        ...values,
        id: completedData.length + 1,
        createdDate: datestring
      }
      setCompletedData([...completedData, object])
    } else {
      const object = {
        ...values,
        id: inProgressData.length + 1,
        createdDate: datestring
      }
      setInProgressData([...inProgressData, object])
    } 
  }
  const editHandler = (values) => {
    const items = inProgressData;
    const newItems = items.filter(item => {
      return item.id !== values.id
    })
    setFormData(values);
    setInProgressData(newItems)
  }
  const closeHandler = values => {
    const items = inProgressData;
    const newItems = items.filter(item => {
      return item.id !== values.id
    })
    const object = {
      ...values,
      status: 'Completed'
    }
    setCompletedData([...completedData, object])
    setInProgressData(newItems)
  }

  const revertHandler = values => {
    const items = completedData;
    const newItems = items.filter(item => {
      return item.id !== values.id
    })
    const object = {
      ...values,
      status: 'In Progress'
    }
    setInProgressData([...inProgressData, object])
    setCompletedData(newItems)
  }

  return (
    <div className="app">
      <div className="bg-container">
        <img className="bg" src={bg} alt="img" />
        <animated.div style={bgProps} className="bg-content">
          <h1>LOREM IPSUM DUMMY TEXT</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </animated.div>
      </div>
      <div className="banner-container">
        <img className="bg-banner" src={banner} alt="img" />
        <animated.div style={bannerProps} className="banner-content">
          <h1>lorem ipsum dummy text</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </animated.div>
      </div>
      <div className='col-container'>
        <div className='col-1'>
          <animated.img style={colImgProps} src={colImg1} alt="img" className="col-1-img"  />
          <animated.div style={colTextProps}>
            <h4>Lorem Ipsum dummy text</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. </p>
          </animated.div>
        </div>
        <div className='col-1'>
          <animated.img style={colImgProps} src={colImg2} alt="img" className="col-2-img" />
          <animated.div style={colTextProps}>
            <h4>Lorem Ipsum dummy text</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. </p>
          </animated.div>
          
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <animated.img style={leftImgProps} src={colImg2} alt="img" className="grid-image" />
          <animated.div style={ImgTextProps} className="grid-content">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the
            </p>
          </animated.div>
        </div>
        <div className="grid-item">
          <animated.img style={rightImgProps}  src={colImg2} alt="img" className="grid-image" />
          <animated.div style={ImgTextProps} className="grid-content">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the
            </p>
          </animated.div>
        </div>
        <div className="grid-item">
          <animated.img style={leftImgProps}  src={colImg2} alt="img" className="grid-image" />
          <animated.div style={ImgTextProps} className="grid-content">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the
            </p>
          </animated.div>
        </div>
      </div>
      <Form handleProgressSubmit={progressSubmit} formData={formData} />
      <Table rows={inProgressData} handleEdit={editHandler} handleClose={closeHandler} />
      <CompletedTable rows={completedData} handleRevert={revertHandler} />
    </div>
  );
}

export default App;
