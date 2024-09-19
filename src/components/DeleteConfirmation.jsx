export default function DeleteConfirmation({onyes,onNo}) {
    return (
        <div className="modal fade" id="deleteConfirmation" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <h2>Are you sure?</h2>
                <p>Do you really want to remove this place?</p>
                <div className="btns">
                    <button onClick={onNo}>No</button>
                    <button onClick={onyes}>Yes</button>
                </div>
            </div>
        </div>
    )
}