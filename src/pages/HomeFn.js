import React, { useEffect, useState } from 'react';
import { Form, ListItem, Search, Sort, Title } from '../components';
import Formfn from '../components/FormFn';
import Listitemfn from '../components/ListItemFn';
import { MockAPI } from '../services';
import { v4 as uuidv4 } from 'uuid';

const Homefn = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    MockAPI.getListTodo().then((res) => setData(res));
  }, []);

  const clickToShow = () => {
    setShow(!show);
  };

  const onSubmitItems = (name, level) => {
    setData([...data, { id: uuidv4(), title: name, level: level }]);
  };

  const delItem = (id) => {
    console.log(id);
    const array = [...data];

    setData(array.filter((item) => item.id !== id));
    // setData([...data.filter((item) => item !== id)]);
  };
  return (
    <div>
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search />
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
        <Listitemfn del={delItem} data={data} />
      </div>
    </div>
  );
};

export default Homefn;
