import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import Svg, { Path, G } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CONTOUR_TEMPLATES = [
  "M-50,80 C150,20 300,140 500,80 C700,20 850,140 1050,80",
  "M-50,180 C150,120 300,240 500,180 C700,120 850,240 1050,180",
  "M-50,280 C150,340 300,220 500,280 C700,340 850,220 1050,280",
  "M-50,380 C150,320 300,440 500,380 C700,320 850,440 1050,380",
  "M-50,480 C150,540 300,420 500,480 C700,540 850,420 1050,480",
];

interface Props {
  color?: string;
  backgroundColor?: string;
  strokeWidth?: number;
  opacity?: number;
  speed?: number;
}

export default function AnimatedTopoBackground({
  color = "#6a5b9e",
  backgroundColor = "#161519",
  strokeWidth = 1.5,
  opacity = 0.4,
  speed = 18,
}: Props) {
  const { width, height } = Dimensions.get("window");
  const drift = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(drift, { toValue: 1, duration: speed * 1000, useNativeDriver: true }),
        Animated.timing(drift, { toValue: 0, duration: speed * 1000, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [drift, speed]);

  const translateX = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 40] });
  const translateY = drift.interpolate({ inputRange: [0, 1], outputRange: [0, 25] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, { backgroundColor, opacity, transform: [{ translateX }, { translateY }] }]}
    >
      <Svg width={width + 100} height={height + 100} viewBox={`0 0 1000 ${height}`}>
        <G>
          {Array.from({ length: Math.ceil(height / 500) + 1 }).map((_, row) =>
            CONTOUR_TEMPLATES.map((d, i) => (
              <AnimatedPath
                key={`${row}-${i}`}
                d={d.replace(/,(\d+)/g, (_, y) => `,${Number(y) + row * 500}`)}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
              />
            ))
          )}
        </G>
      </Svg>
    </Animated.View>
  );
}
