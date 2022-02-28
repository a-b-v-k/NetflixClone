import React from 'react'
import "./widgetlg.css";

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={"widgetlgbutton " + type}>{type}</button>
    }
    return (
        <div className="widgetlg">
            <div className="widgetlgtitle">
                Latest Transactions
            </div>
            <table className="widgetlgtable">
                <tbody>
                <tr className="widgetlgtr">
                    <th className="widgetlgth">Customer</th>
                    <th className="widgetlgth">Date</th>
                    <th className="widgetlgth">Amount</th>
                    <th className="widgetlgth">Status</th>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" alt="userpic" className="widgetlgimg" />
                        <span className="widgetlgname">Susan Corbin</span>
                    </td>
                    <td className="widgetlgdate">2 Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgdate">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" alt="userpic" className="widgetlgimg" />
                        <span className="widgetlgname">Susan Corbin</span>
                    </td>
                    <td className="widgetlgdate">2 Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgdate">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" alt="userpic" className="widgetlgimg" />
                        <span className="widgetlgname">Susan Corbin</span>
                    </td>
                    <td className="widgetlgdate">2 Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgdate">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetlgtr">
                    <td className="widgetlguser">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" alt="userpic" className="widgetlgimg" />
                        <span className="widgetlgname">Susan Corbin</span>
                    </td>
                    <td className="widgetlgdate">2 Jan 2022</td>
                    <td className="widgetlgamount">$122.00</td>
                    <td className="widgetlgdate">
                        <Button type="Approved" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg;
