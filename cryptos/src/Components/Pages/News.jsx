import React,{useState} from 'react'
import {Select ,Typography,Row ,Col ,Avatar,Card} from "antd"
import moment from "moment"
import { useGetCryptoNewsQuery } from '../../Features/CryptoNewsApi'
import { useGetCryptoQuery } from '../../Features/Features'
import Loader from './Loader'
  const News = ({simplified}) => {

  const [category, setCategory] = useState("Cryptocurrency")
  const demoImage="https://coinrevolution.com/wp-content/uploads/2020/06/cryptonew.jpg"
  const count=simplified ? 3:12;
  const {data:cryptoNews}=useGetCryptoNewsQuery({category,count})
  const {data: SearchCoin}=useGetCryptoQuery(100)

  if(!cryptoNews?.value) return <Loader/>

  return (
    
      <Row gutter={[24,24]}>
        {!simplified &&(
          <Col span={24}>
            <Select showSearch
            className='select-news'
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={e=>setCategory(e)}
            filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >0}
            >
              <Select.Option value="cryptocurrency">Crypto...</Select.Option>
              {SearchCoin?.data?.coins.map(coin=> <Select.Option key={coin?.name} value={coin.name}>{coin?.name}</Select.Option>)}
            </Select> 
          </Col>
        )}
        {cryptoNews?.value.map(news=>
          <Col xs={24} sm={12} lg={8} key={news.name}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Typography.Title className="news-title" level={4}>
                    {news.name.substring(0,30)}...
                  </Typography.Title>
                  <img style={{maxWidth:"200px",maxHeight:"200px"}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                </div>
                <p>
                  {news.description.length>100 ?`${news.description.substring(0,100)}...`:news.description}
                </p>
              </a>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl||demoImage} alt="news "/>
                  <Typography.Text className='provider-name'>{news.provider[0]?.name}</Typography.Text>
                </div>
                  <Typography.Text> {moment(news.data?.Published).startOf("ss").fromNow()}</Typography.Text>
              </div>
            </Card>
          </Col>
        )}
      </Row>
    
  )
}

export default News