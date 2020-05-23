import React from "react"
import { BlogServiceConsumer } from '../blog-service-context';

const withBookstoreService = () => (Wrapper) => {
    return(props) => {
        return(
            <BlogServiceConsumer>
                {
                    (blogService) => {
                        return(
                            <Wrapper {...props}  blogService={blogService}/>
                        )
                    }
                }
            </BlogServiceConsumer>
        )
    }
}


export default withBookstoreService

