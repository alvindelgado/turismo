import React from 'react'
import GoogleMaps from "simple-react-google-maps"
//-16.52798763742899, -68.08151362289003
function PMap() {
    return ( 
        <div className='PMap'>
            <GoogleMaps
                apiKey={"AIzaSyCw43ut53oIhP4ptNu5rF8hqnoo-dZmteE"}
                
                className="aaaaa"
                zoom={17}
                center={{
                    lat:-16.52798763742899,
                    lng:-68.08151362289003
                }}
                markers={[
                    { lat:-16.52798763742899,
                        lng:-68.08151362289003 },
                   
                  ]}
                />
        </div>
    )
                
}
export { PMap }