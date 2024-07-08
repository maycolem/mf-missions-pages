type EventListener<T = any> = (data: T) => void;

interface EventBusEvents {
  [key: string]: EventListener[];
}

export class EventBus {
  private events: EventBusEvents;

  constructor() {
    this.events = {};
  }

  // Método para suscribirse a un evento
  on<T = any>(event: string, listener: EventListener<T>): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Método para desuscribirse de un evento
  off<T = any>(event: string, listenerToRemove: EventListener<T>): void {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Método para emitir un evento
  emit<T = any>(event: string, data: T): void {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => listener(data));
  }
}
