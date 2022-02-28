import React, { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import "./home.css";
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import axios from 'axios';
 
 const Home = () => {
    
  const Months = useMemo(() => 
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  ) 

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await axios.get("/users/stats", {
          headers: {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGMxYWEwNTBlNTFjOTM1Y2I3NWQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzExMzcwMywiZXhwIjoxNjQzNTQ1NzAzfQ.ACShw5dXfcGPI8vDO2ddrbi1YdZkj3_Df2VblChMt68",
            }
          }
        });

        const stats = res.data.sort((a, b) => {
            return a._id - b._id;
        })

        stats.map((item) => {
            setUserStats((prev) => [
                ...prev,
                {
                    name: Months[item._id - 1],
                    "New User" : item.total
                }
            ]
        )});
      }
        catch(err){
          console.log(err);
        }
    }
    getStats();
  }, [Months])

     return (
         <div className="home">
             <FeaturedInfo />
             <Chart title="User Analytics" data={userStats} datakey="New User" grid={true}/>
             <div className="homewidgets">
                 <WidgetSm />
                 <WidgetLg />
             </div>
         </div>
     )
 }
 
 export default Home
 