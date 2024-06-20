import { Pagination } from "react-bootstrap";

function CustomPagination(props) {
    const {currentPage, totalePages, handleClick} = props;

    const renderPageItems = () => {
        const pageItems = [];

        for(let i = 1; i <= totalePages; i++){
            pageItems.push(
                <Pagination key={i} active={i === currentPage} 
                    onClick = {() => handleClick(i)}
                >
                    {i}
                </Pagination>
            );
        };

        return pageItems;
    };

    return <div className="d-flex justify-content-center">
        <Pagination>
            <Pagination.Prev />
                {renderPageItems()}
            <Pagination.Next />
        </Pagination>
    </div>
}

export default CustomPagination;