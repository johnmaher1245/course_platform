import React from 'react';

const Tables = function() {
    return (
        <div>
            <table className="responsive-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Alvin<br/>alvin@gmail.com</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td>Alvin<br/>alvin@gmail.com</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td>Alvin<br/>alvin@gmail.com</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                <tr>
                    <td>Alvin<br/>alvin@gmail.com</td>
                    <td>KitKat</td>
                    <td>$9.99</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
};

export default Tables;