import React, { useState, useEffect } from 'react';
import './TesTkd.css';

import Button from 'react-bootstrap/Button';
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import { NavbarUser } from '../../Components/Navbar/navbar-user';
// import soal from '../../soal.json';
const TesTkd = () => {
  // const [soal, setSoal] = useState([]);

  // useState Pagination
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [showPanel, setShowPanel] = useState(true);
  const soal = [
    {
      id: 1,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 2,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 3,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 4,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 5,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 6,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 7,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 8,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 9,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 10,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 11,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 12,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 13,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 14,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 15,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 16,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 17,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 18,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 19,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 20,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 21,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 22,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 23,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 24,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 25,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 26,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 27,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 28,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 29,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 30,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 31,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 32,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 33,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 34,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 35,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 36,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 37,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 38,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 39,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 40,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 41,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 42,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 43,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 44,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 45,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 46,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 47,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 48,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 49,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 50,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 51,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 52,
      jenis: 'Tes Analogi',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan: 'MUSIBAH ; BENCANA',
      jawaban: [
        'Celaka ; terluka',
        'Sakit ; sehat',
        'Takut ; berani',
        'Lentur ; elastis',
        'Kaku ; baik',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 53,
      jenis: 'Penalaran Analitis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Suatu keluarga mempunyai empat anak yang bergelar sarjana. A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam perolehan kesarjanaan adalah ...',
      jawaban: [
        'D memperoleh gelar sarjana sebelum C',
        'A memperoleh gear sarjana sesudah C',
        'C memperoleh gelar sarjana sebelum D',
        'A memperoleh gelar sarjana bersamaan dengan D',
        'B memperoleh gelar sarjana sebelum C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 54,
      jenis: 'Tes Penalaran Logis',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan:
        'Tabungan A lebih banyak daripada tabungan B dan C. Tabungan B lebih banyak daripada tabungan C. Tabungan D lebih banyak daripada jumlah tabungan A, B, dan C.',
      jawaban: [
        'C mempunyai tabungan paling sedikit',
        'Yang mempunyai tabungan paling banyak adalah A',
        'Tabungan A lebih banyak daripada tabungan D',
        'Jumlah tabungan D dan C sama dengan jumlah tabungan A dan B',
        'Tabungan D merupakan penjumlahan tabungan A, B, dan C',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 55,
      jenis: 'Tes Aritmatika',
      petunjuk:
        'Soal­soal aritmatika terdiri dari soal­soal hitungan sederhana, konsep aljabar, dan permasalahan aritmatika lainnya. Setiap soal disertai dengan lima pilihan jawaban. Jawablah setiap soal dengan cara memilih satu dari lima jawaban yang ada.',
      pertanyaan: 'Berapakah nilai dari 4,353 : 0,003',
      jawaban: ['1.451', '1.455', '1.465', '1.471', '1.475'],
    },
    {
      id: 56,
      jenis: 'Tes Deretan Angka',
      petunjuk:
        'Masing­masing soal terdiri dari suatu deretan angka yang belum selesai. Setiap soal disertai dengan lima pilihan jawaban yang ada di bawahnya. Angka­angka tersebut berderet mengikuti suatu prinsip tertentu. Pilihlah satu jawaban untuk menyelesaikan deretan angka itu, sesuai dengan prinsip yang mendasari.',
      pertanyaan: '3 5   8  12  17  23 ...   .....',
      jawaban: [
        '30 dan 37',
        '29 dan 36',
        '29 dan 37',
        '31 dan 39',
        '30 dan 38',
      ],
    },
    {
      id: 57,
      jenis: 'Tes Sinonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 58,
      jenis: 'Tes Antonim',
      petunjuk:
        'Masing­masing soal terdiri dari satu kata yang dicetak dengan huruf besar (huruf kapital) diikuti lima kemungkinan jawaban. Pilihlah satu jawaban yang mempunyai arti sama atau paling dekat dengan arti kata yang dicetak dengan huruf kapital.',
      pertanyaan: 'INISIATIF =',
      jawaban: ['norr', 'asosiatif', 'danu'],
      tipe_soal: 'teks',
    },
    {
      id: 59,
      jenis: 'Tes Gambar',
      petunjuk:
        'Masing­masing soal terdiri dari dua kata yang berpasangan diikuti lima kemungkinan jawaban. Pilihlah satu jawaban paling tepat yang mempunyai kesamaan hubungan dengan soal yang diberikan.',
      pertanyaan:
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652147/tkd/Group_1000006264_x9jyr5.png',
      jawaban: [
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652046/tkd/Group_1000006265_k1bg1s.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652058/tkd/Group_1000006266_qvylxh.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652070/tkd/Group_1000006268_gq1msf.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677656004/tkd/Group_1000006267_3_rwhaci.png',
      ],
      tipe_soal: 'teks',
    },
    {
      id: 60,
      jenis: 'Tes Gambar',
      petunjuk:
        'Soal di bawah ini terdiri dari pernyataan­pernyataan yang akan mengungkap kemampuan Anda dalam menyimpulkan suatu permasalahan. Setiap soal terdiri dari dua atau lebih pernyataan. Bacalah baik­baik pernyataan itu dan tentukan kesimpulan yang dapat ditarik dari pernyataan itu. Kemudian, pilihlah satu dari lima pilihan jawaban yang ada sebagai kesimpulan dari pernyataan itu.',
      pertanyaan: '',
      jawaban: [
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652434/tkd/Group_1000006269_rv1qfy.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652427/tkd/Group_1000006270_aqvfon.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652421/tkd/Group_1000006271_gdecsv.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652416/tkd/Group_1000006272_nife1e.png',
        'https://res.cloudinary.com/dyhbjdod5/image/upload/v1677652411/tkd/Group_1000006273_kypiqe.png',
      ],
      tipe_soal: 'teks',
    },
  ];
  const [jawaban, setJawaban] = useState(
    Array(soal.length).fill('-')
  );
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
          <h4>Submit Ujian</h4>
          <p>Apakah anda yakin ingin menyelesaikan ujian ?</p>
        </Modal.Body>

        <div className="d-flex flex-wrap justify-content-evenly mb-2">
          <div>
            {' '}
            <Button
              onClick={props.onHide}
              className="btn-warning mb-2"
            >
              Kembali ke soal
            </Button>
          </div>
          <div>
            <Button onClick={handleSubmit} className="btn btn-danger">
              ya, Selesaikan Tes
            </Button>
          </div>
        </div>
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

                  <div className="kotak-soal px-2 py-2">
                    {soal[currentQuestion].jenis === 'Tes Gambar' ? (
                      soal[currentQuestion].pertanyaan ===
                      '' ? null : (
                        <img
                          src={soal[currentQuestion].pertanyaan}
                          alt="gambar soal"
                          className="img-fluid"
                          style={{
                            width: '70%',
                            maxWidth: '300px',
                            minWidth: '150px',
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
                          <div
                            className="form-input-tkd"
                            key={optionIndex}
                          >
                            <input
                              type="radio"
                              id={`option-${optionIndex}`}
                              name={`jawaban-${currentQuestion}`}
                              value={String.fromCharCode(
                                97 + optionIndex
                              )}
                              checked={
                                jawaban[currentQuestion] ===
                                String.fromCharCode(97 + optionIndex)
                              }
                              onChange={handleJawabanChange}
                            />
                            <label
                              className="ms-2 mb-4 text-wrap text-break"
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
                                <p className="text-break">{option}</p>
                              )}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className=" d-flex  justify-content-between d-sm-inline mb-4">
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

            <div className="float-end me-2 mt-2 submit-tkd ">
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

          <div className="mb-4 col-lg-3 px-0 panel-soal bg-light">
            <div
              style={{
                padding: '10px 0px 20px 0px',
              }}
              className="header-panel text-light w-100 text-center bg-danger position-relative mb-3"
            >
              <p className="fw-bold position-absolute top-50 start-50 translate-middle">
                Daftar Soal{' '}
              </p>
              <div className="position-absolute top-50 end-0 translate-middle-y me-4 ">
                {' '}
                {showPanel === true ? (
                  <AiOutlineUpCircle
                    onClick={controlPanel}
                    style={{
                      fontSize: '24px',
                    }}
                    className="buttoncontrolpanel"
                  />
                ) : (
                  <AiOutlineDownCircle
                    onClick={() => {
                      setShowPanel(true);
                    }}
                    style={{
                      fontSize: '24px',
                    }}
                    className="buttoncontrolpanel"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="d-flex flex-wrap ms-4  px-2">
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
