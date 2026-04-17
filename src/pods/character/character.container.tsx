import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, updateCharacter } from './api/character.api';
import { mapFromApiToVm, mapFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';
import { CharacterEditComponent } from './character-edit.component';
import { CharacterVm } from './character.vm';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterVm | null>(null);
  const [editMode, setEditMode] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    if (id) {
      getCharacter(Number(id)).then((apiChar) => setCharacter(mapFromApiToVm(apiChar)));
    }
  }, [id]);

  const handleSave = async (updated: CharacterVm) => {
    setSaving(true);
    await updateCharacter(mapFromVmToApi(updated));
    setCharacter(updated);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    setEditMode(false);
  };

  if (!character) return <div>Cargando...</div>;

  if (editMode) {
    return <CharacterEditComponent character={character} onSave={handleSave} />;
  }

  return (
    <>
      <CharacterComponent character={character} />
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button onClick={() => setEditMode(true)} disabled={saving}>Editar mejor frase</button>
        {saving && <span style={{ marginLeft: 8 }}>Guardando...</span>}
        {saved && <span style={{ marginLeft: 8, color: 'green' }}>¡Guardado!</span>}
      </div>
    </>
  );
};
