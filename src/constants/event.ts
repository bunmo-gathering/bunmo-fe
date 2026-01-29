{
  /**
   * EventToken은 `Action_Target[_Modifier]` 형식으로 정의됩니다.
   *
   * - Action: 이벤트의 동작을 나타냅니다. (예: OPEN, CLOSE, UPDATE 등)
   * - Target: 이벤트가 작용하는 대상을 나타냅니다. (예: MODAL, BOTTOMSHEET, DATA 등)
   * - Modifier (선택 사항): 이벤트의 특수한 속성이나 조건을 나타냅니다. (예: CONFIRM, ALERT 등)
   */
}

type BridgePostEventToken = "NONE" | "OPEN_MODAL_CONFIRM" | "OPEN_MODAL_ALERT";

type BridgeGetEventToken = "ACTION_CONFIRMED" | "ACTION_CANCELED";

export type { BridgePostEventToken };
