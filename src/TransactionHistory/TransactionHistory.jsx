import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
             <thead >
                <tr className={css.table_header}>
                <th className={css.cell}>Type</th>
                <th className={css.cell}>Amount</th>
                <th className={css.cell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr className={css.string} key={item.id}>
                            <td className={css.cell}>{item.type}</td>
                            <td className={css.cell}>{item.amount}</td>
                            <td className={css.cell}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> 

    )
}

export default TransactionHistory;