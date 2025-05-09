import React from 'react'

type FocusIndex = number | null

export const useCyclingFocus = (
  /** The size of your list of items. */
  listSize: number,
  /** The index of the initially focused item. Defaults to `null`. */
  initialFocus: FocusIndex = null
): { currentFocus: FocusIndex; setCurrentFocus: React.Dispatch<React.SetStateAction<FocusIndex>> } => {
  const [currentFocus, setCurrentFocus] = React.useState<FocusIndex>(initialFocus)

  const handleKeyDown = React.useCallback<(evt: KeyboardEvent) => void>(
    evt => {
      // Cycle up or down. Also start over if we're outside the list bounds.
      switch (evt.key) {
        case 'ArrowDown':
          evt.preventDefault()

          setCurrentFocus(currentFocus === null ? 0 : currentFocus === listSize - 1 ? 0 : currentFocus + 1)
          break
        case 'ArrowUp':
          evt.preventDefault()
          setCurrentFocus(currentFocus === null ? listSize - 1 : currentFocus === 0 ? listSize - 1 : currentFocus - 1)
          break
      }
    },
    [listSize, currentFocus, setCurrentFocus]
  )

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown])

  return { currentFocus, setCurrentFocus }
}
