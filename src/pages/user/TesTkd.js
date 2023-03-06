import React, { useState, useEffect } from 'react';
import './TesTkd.css';

import Button from 'react-bootstrap/Button';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import { NavbarUser } from '../../Components/Navbar/navbar-user';
import soal from '../../soal.json';
console.log(soal, '<<< soal');
const TesTkd = () => {
  // const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState();
  // useState Pagination
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [showPanel, setShowPanel] = useState(true);

  // const storageKey = 'jawaban';
  // jANGAN DIHAPUS
  useEffect(() => {
    // fetchData();
  }, []);
  // ------------------

  // useEffect(() => {
  //   fetchData();
  //   // cek apakah jawaban tersimpan di localStorage dan memuatnya jika ada
  //   const storedJawaban = localStorage.getItem(storageKey);
  //   if (storedJawaban) {
  //     setJawaban(JSON.parse(storedJawaban));
  //   } else {
  //     setJawaban(Array(soal.length).fill(''));
  //   }

  //   if (jawaban.length !== soal.length) {
  //     setJawaban(Array(soal.length).fill(''));
  //   }
  // }, []);

  // useEffect(() => {
  //   // simpan jawaban ke localStorage setiap kali berubah
  //   localStorage.setItem(storageKey, JSON.stringify(jawaban));
  // }, [jawaban]);

  // Fetch Data dari API
  // JANGAN DIHAPUS
  // const fetchData = async () => {
  //   const response = await fetch('http://localhost:5000/soal');
  //   const data = await response.json();
  //   setSoal(data);
  //   setJawaban(Array(data.length).fill('-'));
  //   console.log('ini soal', data);
  // };
  // --------------
  // const fetchData = async () => {
  //   const response = await fetch('http://localhost:5000/soal');
  //   const data = await response.json();
  //   setSoal(data);
  //   // setJawaban(Array(data.length).fill(''));
  // };

  // Function untuk merubah jawaban
  const handleJawabanChange = (event) => {
    const { name, value } = event.target;
    const newJawaban = [...jawaban];
    newJawaban[currentQuestion] = value;
    setJawaban(newJawaban);
    // console.log(
    //   `Jawaban pada soal nomor ${
    //     currentQuestion + 1
    //   } adalah: ${value}`
    // );
  };

  // fUNCTIION SUBMIT JAWABAN
  const handleSubmit = (event, props) => {
    event.preventDefault();
    const updatedAnswer = [...answer];
    updatedAnswer[currentQuestion] =
      jawaban[`question-${currentQuestion}`] || '-';
    setAnswer(updatedAnswer);
    setJawaban({ ...jawaban, [`question-${currentQuestion}`]: '-' });
    const result = {
      jawaban,
    };
    // setJawaban()
    console.log(result);
    // props.onHide(); // menutup modal
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{
        //   width: '50%',
        //   margin: 'auto',
        // }}
      >
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>Apakah anda yakin ingin menyelesaikan ujian ?</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between">
            <Button className="me-" onClick={props.onHide}>
              Kembali ke soal
            </Button>
            <Button onClick={handleSubmit} className="btn btn-danger">
              ya, Selesaikan Tes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  // function untuk ke halaman sebelumnya
  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  // function untuk ke halaman berikutnya
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Function untuk merubah jawaban
  const handleClearAnswer = () => {
    const newJawaban = [...jawaban];
    newJawaban[currentQuestion] = '-';
    setJawaban(newJawaban);

    // const newAnswer = [...answer];
    // newAnswer[currentQuestion] = '';
    // setAnswer(newAnswer);

    // const nomorSoal = document.getElementsByClassName('nomor-soal');
    // for (let i = 0; i < nomorSoal.length; i++) {
    //   if (newJawaban[i] !== '') {
    //     nomorSoal[i].classList.add('terisi');
    //     nomorSoal[i].classList.remove('kosong');
    //   } else {
    //     nomorSoal[i].classList.add('kosong');
    //     nomorSoal[i].classList.remove('terisi');
    //   }
    // }
  };

  const controlPanel = () => {
    setShowPanel(false);
  };

  return (
    <div>
      <NavbarUser />
      <div className="position-relative container-fluid mt-4 ">
        <div
          className="row  m-auto position-relative"
          style={{
            maxWidth: '1200px',
          }}
        >
          {soal.map((soals) => (
            <div className="mb-4 col-12 col-lg-8  container-soal px-3 py-3 me-4  ">
              <div className="p-2 bg-red text-light position-absolute top-0 start-0 mb-4">
                {' '}
                <b>Soal Nomor : {currentQuestion + 1} </b>
              </div>
              {soal.length > 0 && (
                <form className="  d-inline">
                  <div className="mt-5">
                    <p>
                      <b>Petunjuk : </b>
                      {soal[currentQuestion].petunjuk}
                    </p>
                    <p>
                      <b>Jenis Tes:</b> {soal[currentQuestion].jenis}
                    </p>

                    {/* 
                  <div className="kotak-soal px-2 py-2">
                    {soal[currentQuestion].tipe_soal === 'teks' ? (
                      <p>{soal[currentQuestion].pertanyaan}</p>
                    ) : (
                      <img
                        src={soal[currentQuestion].pertanyaan}
                        alt="gambar soal"
                        className="img-fluid"
                        style={{
                          width: '50%',
                          maxWidth: '500px',
                          marginBottom: '50px',
                        }}
                      />
                    )}  */}
                    <div className="kotak-soal px-2 py-2">
                      {soal[currentQuestion].jenis ===
                      'Tes Gambar' ? (
                        soal[currentQuestion].pertanyaan ===
                        '' ? null : (
                          <img
                            src={soal[currentQuestion].pertanyaan}
                            alt="gambar soal"
                            className="img-fluid"
                            style={{
                              width: '30%',
                              maxWidth: '500px',
                              marginBottom: '50px',
                            }}
                          />
                        )
                      ) : (
                        <p>{soal[currentQuestion].pertanyaan}</p>
                      )}
                      <div
                        className={`${
                          soal[currentQuestion].jenis === 'Tes Gambar'
                            ? 'd-md-flex justify-content-between'
                            : ''
                        }`}
                      >
                        {soal[currentQuestion].jawaban.map(
                          (option, optionIndex) => (
                            <div key={optionIndex}>
                              <input
                                type="radio"
                                id={`option-${optionIndex}`}
                                name={`jawaban-${currentQuestion}`}
                                value={String.fromCharCode(
                                  97 + optionIndex
                                )}
                                checked={
                                  jawaban[currentQuestion] ===
                                  String.fromCharCode(
                                    97 + optionIndex
                                  )
                                }
                                onChange={handleJawabanChange}
                              />
                              <label
                                className="text-wrap text-break"
                                htmlFor={`option-${optionIndex}`}
                              >
                                {soal[currentQuestion].jenis ===
                                'Tes Gambar' ? (
                                  <img
                                    src={option}
                                    alt="gambar jawaban"
                                    className="gambar-jawaban"
                                  />
                                ) : (
                                  <p className="text-break">
                                    {option}
                                  </p>
                                )}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" d-flex justify-content-between d-sm-inline">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm me-2 mt-2"
                      onClick={handlePrev}
                      disabled={currentQuestion === 0}
                    >
                      Sebelumnya
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm me-2 mt-2"
                      onClick={handleClearAnswer}
                      disabled={jawaban[currentQuestion] === ''}
                    >
                      Hapus
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm me-2 mt-2"
                      onClick={handleNext}
                      disabled={currentQuestion === soal.length - 1}
                    >
                      Selanjutnya
                    </button>
                  </div>
                </form>
              )}

              <div className="float-end mt-2 ">
                <button
                  className="btn btn-success ms-auto"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Submit Ujian
                </button>
                <MyVerticallyCenteredModal
                  show={openModal}
                  onHide={() => setOpenModal(false)}
                />
              </div>
            </div>
          ))}

          <div className="mb-4 col-lg-3 px-0 panel-soal bg-light">
            <div className="header-panel text-light w-100 text-center bg-danger">
              <p>
                Daftar Soal{' '}
                {showPanel === true ? (
                  <AiOutlineUp
                    onClick={controlPanel}
                    style={{
                      fontSize: '20px',
                    }}
                    className="buttoncontrolpanel"
                  />
                ) : (
                  <AiOutlineDown
                    onClick={() => {
                      setShowPanel(true);
                    }}
                    className="buttoncontrolpanel"
                  />
                )}
              </p>
            </div>
            <div className="panel-soal">
              <div className="d-flex flex-wrap ms-4  px-3">
                {showPanel &&
                  soal.map((quiz, index) => (
                    <div
                      key={quiz.id}
                      className={`nomor-soal ${
                        jawaban[index] !== '-'
                          ? 'terisi text-center'
                          : 'kosong text-center'
                      }`}
                      onClick={() => setCurrentQuestion(index)}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      {index + 1}
                    </div>
                  ))}
              </div>
              <div className="petunjuk ms-3 px-1 py-4">
                <div className="d-flex">
                  <div className="nomor-soal terisi "></div>
                  <p>Jawaban Terisi</p>
                </div>
                <div className="d-flex">
                  <div className="nomor-soal kosong"></div>
                  <p>Jawaban Belum Terisi</p>
                </div>
              </div>
            </div>
          </div>
          {/* tes  */}
        </div>
      </div>
    </div>
  );
};

export default TesTkd;
