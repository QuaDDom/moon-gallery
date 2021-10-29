import { memo } from 'react'
import Particles from 'react-particles-js'
import './ParticlesBackground.scss'


export default memo(function ParticlesBackground({params}) {
    return (
        <div style={{
            maxHeight: '100vh'
        }} >
        <Particles
        style={{
            position: 'absolute',
            maxHeight: '100vh',
            width: '100%'
        }}
        params={
            params
        }
        />
        </div>
    )
})
