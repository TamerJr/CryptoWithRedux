import React from 'react'
import millify from 'millify'
import { useGetCryptoQuery } from '../../Features/Features'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import Currencies from './Currencies'
import News from './News'
import Loader from './Loader'
const Home = () => {
  const {data ,isFetching}=useGetCryptoQuery(10)
  const mainData=data?.data?.stats
  if(isFetching) return <Loader/>
  return (
    <>
      <Typography.Title level={2} className="heading">
        Trending Coin
      </Typography.Title>
      <Row key={mainData?.name}>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={mainData?.total}/>
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={millify(mainData?.totalExchanges)}/>
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={millify(mainData?.totalMarketCap)}/>
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={millify(mainData?.total24hVolume)}/>
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={millify(mainData?.totalMarkets)}/>
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level="3" className="home-title">Top 10</Typography.Title>
        <Typography.Title level="2" className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
      </div>
      <Currencies simplified/>
      <div className='home-heading-container'>
        <Typography.Title level="3" className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level="2" className="show-more"><Link to="/news">Show More</Link></Typography.Title>
      </div>
      <News simplified/>

    </>
  )
}

export default Home