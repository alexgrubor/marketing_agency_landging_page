'use client'
import { useEffect, useState } from "react"
import axios from "axios"

const AnalyticsData = () => {
    const [data, setData] = useState([])

useEffect(()=>{
    axios.get("/api/admin/google_analytics")
    .then((res) => {
        setData(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
}, [])
  return (
    <div>AnalyticsData</div>
  )
}
export default AnalyticsData