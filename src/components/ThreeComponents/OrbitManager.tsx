import {LegacyRef, useEffect, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

type propsType = {
    orbitRef: LegacyRef<any>
}

const OrbitManager = (props: propsType) => {
    const THRESHOLD_TIME = 5000;
    const noActionTimerRef = useRef(5000);
    const isHoldingRef = useRef(false);

    useFrame((_, dt) => {
        if (isHoldingRef.current) {
            noActionTimerRef.current = 0;

            return;
        }

        if (props.orbitRef.current.movedByButton) {
            noActionTimerRef.current = -1000;
            props.orbitRef.current.movedByButton = false;

            return;
        }

        dt *= 1000;

        noActionTimerRef.current += dt;

        if (noActionTimerRef.current >= THRESHOLD_TIME) {
            const currentAngle = props.orbitRef.current.getAzimuthalAngle();
            props.orbitRef.current.setAzimuthalAngle(currentAngle - Math.PI / 180 * dt / 4);
        }
    })

    return (
        <OrbitControls
            onStart={() => isHoldingRef.current = true}
            onEnd={() => isHoldingRef.current = false}
            ref={props.orbitRef}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={false}
            movedByButton={false}
        />
    )
}

export default OrbitManager;
