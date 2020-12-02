import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Carding from '../styles/Carding.module.css'
import Carousel from 'nuka-carousel'

import api from '../services/api';

import {Header, Card,} from '../src/components'


export default function Home() {
  const [projects, setProjects] = useState({})

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      // console.log((response.data));

    })

  }, [])

  // const [projects, setProjects ] = useState([
  //   {
  //     projeto: 'Sampling trident otima',
  //     dataInit:'26/10',
  //     dataFin:'02/11',
  //     enderecos:[
  //       {
  //         end: 'Av. Paulista, 800'
  //       }
  //     ]
  //   },
  //   {
  //     projeto: 'Mesa Interativa',
  //     dataInit:'26/10',
  //     dataFin:'02/11',
  //     enderecos:[
  //       {
  //         end: 'Av. Paulista, 900',
  //       },
  //       {
  //         end: 'Rua Fulano de Tal, 1100'
  //       }
  //     ]
  //   },
  //   {
  //     projeto: 'Mesa Interativa',
  //     dataInit:'26/10',
  //     dataFin:'02/11',
  //     enderecos:[{
  //       end: 'Av. Ibirapuera, 900'
  //     }]
  //   },
  // ]);

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
            temperatura
          </div>
          <div className={styles.projects}>
            <Card className={Carding.card} >
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

                  Object.keys(projects).length != 0 ? projects.map((project, i) =>(
                    <div className={Carding.projectTitle} key={i}>
                      <p className={Carding.endereco}>{project.name}</p>
                      <p className={Carding.endereco}>Veiculação: {project.initial_date} - {project.final_date}</p>
                      <p className={Carding.endereco} style={{display:'flex'}}>
                        Endereço: 
                        {project.address}
                        {/* {project.enderecos.map((endereco, i) => (
                          <div style={{paddingRight:10}} key={i}>
                            {endereco.end},
                          </div>
                        ))} */}
                      </p>

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
