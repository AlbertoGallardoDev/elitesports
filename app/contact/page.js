"use client";

import { useState } from 'react';
import './contact.css';  // Importamos los estilos para la página de contacto
import questions from '../../public/questions.json';  // Importación directa del archivo JSON
import { Instagram, Facebook, Email } from '@mui/icons-material';  // Importación de íconos de MUI

export default function Contact() {
  const [openFaq, setOpenFaq] = useState({});

  const handleFaqClick = (quizIndex, questionIndex) => {
    setOpenFaq((prev) => ({
      ...prev,
      [quizIndex]: prev[quizIndex] === questionIndex ? null : questionIndex
    }));
  };

  return (
    <>
      <section id="cuestions">
        <div className="container">
          <div className="p-5 pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <a href="mailto:info@elitesports.com" className="d-flex align-items-center text-decoration-none text-white">
                  <Email className="me-2" style={{ fontSize: 30 }} />
                  <span>info@elitesports.com</span>
                </a>
              </div>
              <div className="d-flex gap-3">
                <a href="https://www.instagram.com/elitesportstrips" target="_blank" rel="noopener noreferrer" className="text-white">
                  <Instagram style={{ fontSize: 40 }} />
                </a>
                <a href="https://www.facebook.com/elitesportstrips" target="_blank" rel="noopener noreferrer" className="text-white">
                  <Facebook style={{ fontSize: 40 }} />
                </a>
              </div>
            </div>
          </div>

          {questions.map((quiz, quizIndex) => (
            <div key={quizIndex} className="faq-section m-5 p-5">
              <h2 className='text-light'>{quiz.title}</h2>

              {quiz.questions.map((faq, questionIndex) => (
                <div key={questionIndex} className={`faq ${openFaq[quizIndex] === questionIndex ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => handleFaqClick(quizIndex, questionIndex)}>
                    {faq.question}
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openFaq[quizIndex] === questionIndex ? '300px' : '0',
                      transition: 'max-height 0.5s ease',
                      overflow: 'hidden'
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
