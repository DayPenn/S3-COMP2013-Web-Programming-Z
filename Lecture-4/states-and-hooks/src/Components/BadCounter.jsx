// this is not the correct way to store, manipulate and rerender components

export default function BadCounter(){
    let count = 0;
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={() => {
                count++;
                console.log(count);
            }}>
                Bad Counter "out of order"
            </button>
        </div>
    )
}