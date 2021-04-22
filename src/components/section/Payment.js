import React, { Component } from 'react';
import '../CSS/Payment.css'

export class Payment extends Component {
    render() {
        return (
            <div className="payment">
                <h1>Thank You</h1>
                        <div className="payment__title">
                            <h2>Payment occurred</h2>
                            <p className="p3">The products will be sent to you as soon as possible.</p>
                        </div>
                        <div className="payment__address">
                            <h3>Delivery Address</h3>
                            <p className="p4">6 Plevna St, Isle of Dogs Longdon, United Kingdom</p>
                        </div>
            </div>
        )
    }
}

export default Payment
