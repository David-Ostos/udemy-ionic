import { caretUpOutline, caretDownOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';

export default defineComponent({
  components: { IonIcon },
  setup() {
    return { caretUpOutline, caretDownOutline };
  },
  });
