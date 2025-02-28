import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
    ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const FarmItem = ({ name, onSelect }) => {
    return (
        <TouchableOpacity
            style={styles.FarmItem}
            onPress={() => onSelect({ name})}
        >

            <Text style={styles.fileName}>{name}</Text>
        </TouchableOpacity>
    );
};

const DownloadsDropdown = ({ files = [] , placeHolder}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const rotateAnim = useState(new Animated.Value(0))[0];
    const opacityAnim = useState(new Animated.Value(0))[0];
    const [contentHeight, setContentHeight] = useState(0);

    const toggleDropdown = () => {
        const toValue = isOpen ? 0 : 1;

        // Animar la rotación del icono
        Animated.timing(rotateAnim, {
            toValue,
            duration: 300,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: true,
        }).start();

        // Animar la opacidad del contenido
        Animated.timing(opacityAnim, {
            toValue,
            duration: 300,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: true,
        }).start();

        setIsOpen(!isOpen);
    };

    const handleSelect = (file) => {
        setSelectedFile(file);
        toggleDropdown(); // Cerrar el dropdown después de seleccionar
    };

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    // Calcular la altura del contenido basado en el número de archivos
    useEffect(() => {
        setContentHeight(files.length * 50);
    }, [files]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={toggleDropdown}
                activeOpacity={0.8}
            >
                <View style={styles.headerContent}>
                    {selectedFile ? (
                        <>

                            <Text style={styles.headerText}>{selectedFile.name}</Text>
                        </>
                    ) : (
                        <Text style={styles.headerText}>{placeHolder}</Text>
                    )}
                </View>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Feather name="chevron-down" size={24} color="#6A542A" />
                </Animated.View>
            </TouchableOpacity>

            {isOpen && (
                <Animated.View
                    style={[
                        styles.content,
                        {
                            opacity: opacityAnim,
                            height: contentHeight,
                            transform: [
                                {
                                    translateY: opacityAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-20, 0],
                                    })
                                }
                            ]
                        }
                    ]}
                >
                    <View style={styles.indicator} />
                    <ScrollView style={styles.scrollView} bounces={false}>
                        {files.map((file, index) => (
                            <FarmItem
                                key={index}
                                name={file.name}
                                type={file.type}
                                onSelect={handleSelect}
                            />
                        ))}
                    </ScrollView>
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '45%',
        alignSelf: 'center',
    },
    header: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 8,
        zIndex: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    headerIcon: {
        marginRight: 10,

    },
    headerText: {
        color: "#6BBF59",
        fontSize: 18,
        fontWeight: '500',
        fontFamily:"CharlieDisplay-Bold"
    },
    content: {
        position: 'absolute',
        top: 65,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        zIndex: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    scrollView: {
        flex: 1,
    },
    FarmItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    fileName: {
        marginLeft: 15,
        fontSize: 16,
        color: '#333',
    },
    indicator: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        backgroundColor: '#08ff00',
    },
});

export default DownloadsDropdown;