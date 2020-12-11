import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Carding from '../styles/Carding.module.css'
import Carousel from 'nuka-carousel'
import axios from 'axios'

import api from '../services/api';
import {Header, Card} from '../src/components'

const now = new Date
let lat2 = "";
let long2 = "";

export default function Home() {
  const [projects, setProjects] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      // console.log((response.data));
    })

  }, []);

  useEffect(() => {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;

    lat2 = lat;
    long2 = long;

    axios.get(url)
      .then(function (response) {
        setWeather(response.data);
        
      })
      .catch(function (error) {
        console.log(error)
      })
    })
    
  }, []);

  return (
    <div className={styles.container}>
      <Header title='Mesa Interativa Bizsys'>
        <title>Create Next App</title>
      </Header>
      <div className={styles.content}>
        <div className={styles.fistColunm}>
          <div className={styles.news}>
            news
          </div>
          <div className={styles.cardNews}>
            card  break news
          </div>

        </div>
        <div className={styles.secondColunm}>
          <div className={styles.weather}>
            <div className={styles.figures}>
              <div className={styles.barra}>
              <svg width="159" height="31" viewBox="0 0 159 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M54.0972 2.22373e-06L28.6607 30.3707L45.8849 30.3707L71.3214 3.72952e-06L54.0972 2.22373e-06Z" fill="#FFF8F3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M83.0972 2.22373e-06L57.6607 30.3707L74.8849 30.3707L100.321 3.72952e-06L83.0972 2.22373e-06Z" fill="#FFF8F3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M112.097 2.22373e-06L86.6607 30.3707L103.885 30.3707L129.321 3.72952e-06L112.097 2.22373e-06Z" fill="#FFF8F3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M141.437 2.22373e-06L116.001 30.3707L133.225 30.3707L158.661 3.72952e-06L141.437 2.22373e-06Z" fill="#FFF8F3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.7525 9.17453L25.4365 -1.50579e-06L42.6607 0L17.7525 29.7399L17.7525 9.17453ZM-1.14441e-05 30.3707L17.2242 30.3707L17.2242 30.3707L-1.14441e-05 30.3707Z" fill="#FFF8F3"/>
                </svg>
              </div>
              <div className={styles.logo}>
              <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83.3827 56.9957C83.3827 53.3486 80.4102 50.3827 76.755 50.3827H49.5654V56.4627C47.119 57.435 45.3827 59.8202 45.3827 62.6038C45.3827 65.3875 47.119 67.7727 49.5654 68.745V74.7746H76.755C76.8313 74.7746 76.9049 74.7664 76.9799 74.7637C76.5246 76.7981 74.7038 78.3239 72.5287 78.3239H52.0104C49.4945 78.3239 47.4475 76.2813 47.4475 73.7697H45.3827C45.3827 77.4155 48.3565 80.3827 52.0104 80.3827H72.5287C75.9945 80.3827 78.8429 77.7146 79.1291 74.3286C81.6123 73.3726 83.3827 70.9724 83.3827 68.1616C83.3827 65.8158 82.1534 63.7515 80.3026 62.5793C82.1534 61.4058 83.3827 59.3415 83.3827 56.9957ZM49.5654 66.4441C48.2952 65.6349 47.4475 64.218 47.4475 62.6052C47.4475 60.9924 48.2938 59.5754 49.5654 58.7663V66.4441ZM51.6288 58.07C51.7555 58.0591 51.8823 58.051 52.0104 58.051H72.5287C74.6779 58.051 76.4783 59.5427 76.9621 61.5404C76.8926 61.5445 76.8245 61.5513 76.755 61.5513H51.6288V58.07ZM76.755 72.7171H51.6288V69.1978C51.7555 69.2046 51.8823 69.2168 52.0104 69.2168H72.5287C74.6779 69.2168 76.4783 70.7086 76.9621 72.7062C76.8926 72.7103 76.8245 72.7171 76.755 72.7171ZM81.3193 68.1629C81.3193 69.8818 80.3598 71.379 78.9479 72.1555C78.2228 69.2889 75.6251 67.1594 72.53 67.1594H52.0104C51.8823 67.1594 51.7555 67.1512 51.6288 67.1403V63.6087H76.7536C79.2722 63.6087 81.3193 65.6513 81.3193 68.1629ZM78.9465 60.9883C78.2214 58.1217 75.6238 55.9921 72.5287 55.9921H52.0104C51.8823 55.9921 51.7555 56.0044 51.6288 56.0112V52.4415H76.7536C79.2709 52.4415 81.3179 54.484 81.3179 56.9957C81.3193 58.7159 80.3598 60.2118 78.9465 60.9883Z" fill="#FFF8F3"/>
                <path d="M64.3841 37.3827C48.9429 37.3827 36.3827 49.9446 36.3827 65.382C36.3827 80.8221 48.9429 93.3827 64.3841 93.3827C79.8225 93.3827 92.3827 80.8221 92.3827 65.382C92.3827 49.9446 79.8211 37.3827 64.3841 37.3827ZM64.3841 91.3175C50.0833 91.3175 38.4479 79.6845 38.4479 65.382C38.4479 51.0795 50.0833 39.4466 64.3841 39.4466C78.6835 39.4466 90.3175 51.0795 90.3175 65.382C90.3175 79.6845 78.6821 91.3175 64.3841 91.3175Z" fill="#FFF8F3"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="130" height="130">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8468 23.8446L23.8446 40.8468L47.6892 64.6914L23.8446 88.536L40.8468 105.538L64.6914 81.6936L88.5359 105.538L105.538 88.536L81.6936 64.6914L105.538 40.8469L88.5359 23.8446L64.6914 47.6892L40.8468 23.8446Z" fill="#C4C4C4"/>
                </mask>
                <g mask="url(#mask0)">
                <circle cx="64.3987" cy="65.571" r="34.9807" stroke="#FFF8F3"/>
              </g>
              </svg>
              </div>
            </div>   

            <div className={styles.temp}>
              <p>TEMPERATURA:</p>
                <h2>
                  <span>{weather ? `${((5/9) *(weather.main.temp-32)).toFixed(0)} ° `: 'Sem temperatura'}</span>
                </h2>
            </div>
            <div className={styles.globo}>GLOBO / Assets</div>
            <div className={styles.date}>
              {
              (now.getDate()<10 ? (`0${now.getDate()}`) : now.getDate())+"/"+
              (now.getMonth()<10 ? (`0${now.getMonth()+1}`) : now.getMonth()+1)+"/"+
              (now.getFullYear())
              
              // (now.getDate() < 10) ? 
              // ((now.getMonth() < 10) ? ("0" + now.getDate() + "/" + "0" + now.getMonth() + "/" + now.getFullYear()) : ("0" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear())) 
              // :
              // ((now.getMonth() < 10) ? (now.getDate() + "/" + "0" + now.getMonth() + "/" + now.getFullYear()) : (now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()))
            }
            </div>
          <div className={styles.geolocalization}> {`${lat2} ${long2}`}</div>
          </div>
          <div className={styles.projects}>
            <Card className={Carding.card}>
              <h2 className={Carding.title}>Projetos</h2>
              <svg style={{paddingLeft: 20}} width="324" height="33" viewBox="0 0 324 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32H317.929C322.383 32 324.614 26.6143 321.464 23.4645L299 1" stroke="#2D2C29"/>
              </svg>

              <Carousel
                defaultControlsConfig={{
                  nextButtonClassName: Carding.buttonCarousel,
                  prevButtonClassName: Carding.buttonCarousel,
                  pagingDotsContainerClassName: Carding.dottes
                }}
                wrapAround={true}
                style={{ padding: 20, height: '89%' }}>

                  {
                  projects ? projects.map((project, i) =>(
                    <div className={Carding.projectTitle} key={i}>
                      <p className={Carding.name}>{project.name}</p>
                      <p className={Carding.date}>Veiculação: {project.initial_date} - {project.final_date}</p>
                      <p className={Carding.endereco} style={{display:'flex'}}>
                        Endereço: 
                        {project.address}
                        {/* {project.enderecos.map((endereco, i) => (
                          <div style={{paddingRight:10}} key={i}>
                            {endereco.end},
                          </div>
                        ))} */}
                      </p>
                      <p className={Carding.image}> {project.image.map((image) => {
                        <Image source={{uri: ''}} />
                        console.log(image.name)
                      }) }</p>

                      <a>Ler Mais</a>
                    </div>
                  )): <di><p>Não existe projetos no momento</p></di>}
              </Carousel>
            </Card>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <h1>Bizsys</h1>
      </div>
    </div>
  )
}