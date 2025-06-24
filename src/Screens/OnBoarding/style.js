import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Common/Dimension';
import COLORS from '../../Common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // 60% screen height for image
  imageWrapper: {
    height: SCREEN_HEIGHT * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: SCREEN_WIDTH,
    resizeMode: 'cover',
  },

  // 40% screen height for text + button
  section: {
    height: SCREEN_HEIGHT * 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  topheading: {
    color: COLORS.darkteal,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    color: COLORS.grey,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    backgroundColor: COLORS.darkteal,width:SCREEN_WIDTH/1.3,
    paddingVertical: 12,

    paddingHorizontal: 36,
    borderRadius: 20,
    marginTop: 12,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    textAlign:"center"
  },

  skip: {
    color: COLORS.darkteal,
    fontSize: 16,
    marginTop: 8,
    fontWeight:"500"
  },
});

export default styles;
