import React from 'react'

const Data = ({ employees }) => {
    return (
        <>
            {
                employees.map((curremployee) => {
                    const { name, Profile } = curremployee;
                    return (
                        <tr>
                            <td class="px-4 py-2 border border-gray-400 text-center">{name}</td>
                            <td class="px-4 py-2 border border-gray-400 text-center">{Profile}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Data
