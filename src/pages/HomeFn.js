import React, { useEffect, useState } from 'react';
import { Formfn, Listitemfn, Searchfn, Sort, Title } from '../components';
import { MockAPI } from '../services';
import { v4 as uuidv4 } from 'uuid';
import { getListToDo } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Homefn = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const dispatch = useDispatch();
  const item = useSelector((s) => s.list) || [];

  useEffect(() => {
    MockAPI.getListTodo().then((res) => dispatch(getListToDo(res)));
  }, []);
  useEffect(() => {
    MockAPI.getListTodo().then((res) => setDataFilter(res));
  }, []);

  const clickToShow = () => {
    setShow(!show);
  };

  const handleSearch = (value) => {
    if (value === '') {
      setData(dataFilter);
    } else {
      setData(
        dataFilter.filter((item) => {
          return item.title.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  };

  const onSubmitItems = (name, level) => {
    setData([...data, { id: uuidv4(), title: name, level: level }]);
    setShow(!show);
  };

  const delItem = (id) => {
    console.log(id);
    const array = [...data];
    setData(array.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Searchfn handleSearch={handleSearch} />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button
              onClick={clickToShow}
              type="button"
              className="btn btn-info btn-block marginB10"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            {show ? <Formfn onSubmitForm={onSubmitItems} /> : <div></div>}
          </div>
        </div>
        <Listitemfn del={delItem} data={item} />
      </div>
    </div>
  );
};

export default Homefn;
