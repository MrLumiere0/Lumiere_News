export default function Carousel() {
  return (
    <div className='Carousel'>
      <div className='carousel-wrapper'>
        {/* .map function */}
        <div className='carousel-card'>
          <div className='card-main'>
            <img src='' alt='' />
            <div className='card-options'>
              <div className='card-tags'></div>
              <h2>Expand</h2>
            </div>
          </div>

          <div className='card-details'>
            <h2 className='card-title'>Headline Title</h2>
            <p className='card-description'></p>

            <div className='card-source'>
              <div>
                <p className='source-name'>Source</p>
                <p className='source-date'>Date</p>
              </div>

              <div className='star'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
