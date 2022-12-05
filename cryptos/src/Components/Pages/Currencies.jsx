import React, { useState } from 'react'
import millify from "millify"
import { Link } from 'react-router-dom'
import {Card,Row,Col,Input} from "antd"
import { useGetCryptoQuery } from '../../Features/Features'
import { useEffect } from 'react'
import Loader from './Loader'
 const Currencies = ({simplified}) => {
  const count= simplified ? 10 :100;
  const {data:cryptosList ,isFetching}=useGetCryptoQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm ,setSearchTerm]=useState('')
  useEffect(()=>{
    const filteredData=cryptosList?.data.coins.filter((coin)=>coin?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  },[cryptosList,searchTerm])
  if (isFetching) return <Loader/>
  // console.log(cryptosList.data.coins)
  return (
      <> 
      { !simplified?
      <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={e=>setSearchTerm(e.target.value)}/>
      </div> :null
      }
        <Row gutter  ={[32,32]} className="crypto-card-conatiner">
            {cryptos?.map (currency=>(
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.name}>
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl}/>}
                  hoverable>
                      <p>Price : {millify(currency.price)}</p>
                      <p>Market Cap : {millify(currency.marketCap)}</p>
                      <p>Daily Change : {millify(currency.change)}%</p>

                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </>
    )
}
export default Currencies