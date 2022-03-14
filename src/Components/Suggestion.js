import { useContext } from 'react'
import { MainContext } from './BlogDetails'
import { Link } from 'react-router-dom'

const MoreSiren = () => {
    const [data] = useContext(MainContext)

    return (
        <>
            <div className="moresiren-container">
                <h2 className="moresiren-heading">More Articles</h2>
                <hr className="moresiresn-horizontal-line"/>
                <div className="moresiren-items">
                    {
                        data.filter(
                            latest => latest.id === '5' && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Food')
                        ).map(
                            latestInfo => (
                                <div className="moresiren-box">
                                
                                <Link to={`/category/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none" }}>
                                    <p className="moresiren-info">Suggested Articles</p>
                                    <img src={latestInfo.url} className="moresiren-image" alt=""/>
                                    <h4 className="moresiren-title">{latestInfo.title}</h4>
                                    <div className="moresiren-user-box" >
                                        <img className="moresiren-user" src={require('../icons/users.webp')} alt=""/>
                                        <div className="moresiren-user-details">
                                            <p>User Review</p>
                                            <p className="moresiren-date">Read more.</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MoreSiren;