import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavbarUser } from '../../Components/Navbar/navbar-user';
import './TesKetelitian.css';

const TesKetelitian = () => {
  const [soal, setSoal] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const result = {
      jawaban: [],
    };
    for (const key in data) {
      if (!data[key]) {
        result.jawaban.push('-');
      } else {
        result.jawaban.push(data[key]);
      }
    }

    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/ketelitian'
      );
      const data = response.data;
      setSoal(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <NavbarUser />
      <div className="container mt-4 tes-ketelitian-wrapper">
        <div className="py-4 px-2">
          <div className=" text-center mt-4">
            <div>
              <h1>TES KETELITIAN</h1>
            </div>
            <div>
              <b>Petunjuk</b>
              <br></br> Bandingkan susunan huruf/angka/kata pada
              pernyataan 1 dan pernyataan 2. Kemudian, Isilah kolom
              sama apabila susunan huruf/angka/kata yang di depan
              SAMA, dan isilah kolom tidak apabila TIDAK SAMA
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {soal.map((soals, index) => (
              <div className="soal-ketelitian mt-2" key={soals.id}>
                {/* Nomor soal */}
                <div className="fw-bold me-2 d-inline">
                  {index + 1}.
                </div>
                <div className="d-inline">
                  {/* soal */}
                  <p className="d-inline me-2 ">
                    {soals.pernyataan1}
                  </p>
                  <p className="d-inline me-2 text-danger fw-bold">
                    --
                  </p>
                  <p className="d-inline me-2">{soals.pernyataan2}</p>

                  <div className="ms-4">
                    {/* jawaban */}
                    <input
                      type="radio"
                      className="me-2"
                      id={`sama-${index}`}
                      name={`jawaban-${index}`}
                      value="Sama"
                      {...register(`jawaban-${index}`)}
                      style={{
                        border: '',
                      }}
                    />
                    <label htmlFor={`sama-${index}`} className="me-2">
                      Sama
                    </label>
                    <br></br>
                    <input
                      type="radio"
                      className="me-2"
                      id={`tidak-${index}`}
                      name={`jawaban-${index}`}
                      value="Tidak"
                      {...register(`jawaban-${index}`)}
                    />
                    <label htmlFor={`tidak-${index}`}>Tidak</label>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="text-center"
              style={{ margin: '150px 0' }}
            >
              <button type="submit" className="btn btn-danger w-50">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default TesKetelitian;
