import { format } from "date-fns";
import { Head } from "next/document";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PointProps } from "../../../@types/Point";
import Header from "../../../components/Header";
import api from "../../../services/axios";
import { PointContainer, CardPoint, CardContent } from "../../../styles/pointsStyles";

export default function PointsPage () {
    const [points, setPoints] = useState<PointProps[]>([]);
    const { query } = useRouter();
    
    useEffect(() => {
      api.get('get-points', {
        params: {
          initialDate: '26/10/2022',
          endDate: '26/10/2022',
          'company-token-pg': query.companyid,
          'employee-token-pg': query.employeeid
        }
      })
      .then(({ data }) => {
        setPoints(data);
      })
    }, [])

    return (
        <PointContainer>
          <Header />
            <h2>All Points</h2>
            <CardContent>
            {points.map((point) => {
              const formattedDate = format(new Date(point.date), "dd/MM/yyyy, HH:mm");

                return (
                    <CardPoint key={point.id}>
                        <p>{formattedDate}</p>
                        <p>{point.userData.device}</p>
                    </CardPoint>
                )
              })}
              </CardContent>
        </PointContainer>
    )
}