import styles from './levels.module.css'

function levels(props) {
    return (
        <>
            <div className={[styles.outer_level].join(" ")}>
				<div className={['row', styles.inner_level].join(" ")}>
				<div className="col-sm-4 col-md-3 rounded shadow bg-black p-3">Biginner</div>
                <div className="col-sm-4 col-md-3 rounded shadow bg-black p-3">Intermediate</div>
                <div className="col-sm-4 col-md-3 rounded shadow bg-black p-3">Advanced</div>
                <div className="col-sm-4 col-md-3 rounded shadow bg-black p-3">Professional</div>
				</div>
               
            </div>
        </>
    );
}

export default levels;
